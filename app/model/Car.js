/**
 * Model representing a Staff object
 */
Ext.define('CarTracker.model.Car', {
  extend: 'CarTracker.model.Base',
  idProperty: 'CarID',
  fields: [
    // id field
    {
      name: 'CarID',
      type: 'int',
      useNull: true
    },
    // simple values
    {
      name: 'Description',
      type: 'string'
    },
    {
      name: 'Year',
      type: 'int'
    },
    {
      name: 'ListPrice',
      type: 'int'
    },
    {
      name: 'SalePrice',
      type: 'int'
    },
    {
      name: 'AcquisitionDate',
      type: 'date',
      dateWriteFormat: 'Y-m-d'
    },
    {
      name: 'SaleDate',
      type: 'date',
      dateWriteFormat: 'Y-m-d'
    },
    {
      name: 'IsSold',
      type: 'boolean'
    },
    // relational properties
    {
      name: 'Status',
      type: 'auto'
    },
    {
      name: 'Make',
      type: 'auto'
    },
    {
      name: 'Model',
      type: 'auto'
    },
    {
      name: 'Category',
      type: 'auto'
    },
    {
      name: 'SalesPeople',
      type: 'auto'
    },
    {
      name: 'Color',
      type: 'auto'
    },
    {
      name: 'Features',
      type: 'auto'
    },
    // decorated properties
    {
      name: '_Status',
      type: 'string',
      persist: false,
      convert: function (value, model) {
        var statusId = model.get('Status');
        var statuses = Ext.StoreManager.lookup("option.Statuses");
        var status = statuses.findRecord('StatusID', statusId);
        return status ? status.get("LongName") : "";
      }
    },
    {
      name: '_Make',
      type: 'string',
      persist: false,
      convert: function (value, model) {
        var makeId = model.get('Make');
        var makes = Ext.StoreManager.lookup("option.Makes");
        var make = makes.findRecord('MakeID', makeId);
        return make ? make.get("LongName") : "";
      }
    },
    {
      name: '_Model',
      type: 'string',
      persist: false,
      convert: function (value, model) {
        var modelId = model.get('Model');
        var models = Ext.StoreManager.lookup("option.Models");
        var model = models.findRecord('ModelID', modelId);
        return model ? model.get("LongName") : "";
      }
    },
    {
      name: '_Category',
      type: 'string',
      persist: false
    },
    {
      name: '_Color',
      type: 'string',
      persist: false
    },
    {
      name: '_Features',
      type: 'string',
      persist: false
    },
    {
      name: '_SalesPeople',
      type: 'string',
      persist: false
    }
  ],

  set: function (fieldName, value) {
    this.callParent(arguments);

    var me = this,
      single = (typeof fieldName == 'string');

    if (single && fieldName === 'Make') {
      me.set('_Make');
    } else {
      var values = fieldName;

      for (name in values) {
        if (name === 'Make') {
          me.set('_Make')
        }
      }
    }

    if (single && fieldName === 'Model') {
      me.set('_Model');
    } else {
      var values = fieldName;

      for (name in values) {
        if (name === 'Model') {
          me.set('_Model')
        }
      }
    }

    if (single && fieldName === 'Status') {
      me.set('_Status');
    } else {
      var values = fieldName;

      for (name in values) {
        if (name === 'Status') {
          me.set('_Status')
        }
      }
    }
  }
});