/**
 * Model representing a Staff object
 */
Ext.define('CarTracker.model.Staff', {
  extend: 'CarTracker.model.Base',
  idProperty: 'StaffID',
  fields: [
    // id field
    {
      name: 'StaffID',
      type: 'int',
      useNull: true
    },
    // simple values
    {
      name: 'FirstName',
      type: 'string'
    },
    {
      name: 'LastName',
      type: 'string'
    },
    {
      name: 'DOB',
      type: 'date',
      dateWriteFormat: 'Y-m-d'
    },
    {
      name: 'Address1',
      type: 'string'
    },
    {
      name: 'Address2',
      type: 'string'
    },
    {
      name: 'City',
      type: 'string'
    },
    {
      name: 'State',
      type: 'string'
    },
    {
      name: 'PostalCode',
      type: 'string'
    },
    {
      name: 'Phone',
      type: 'string'
    },
    {
      name: 'HireDate',
      type: 'date',
      dateWriteFormat: 'Y-m-d'
    },
    // relational properties
    {
      name: 'Position',
      type: 'auto'
    },
    // decorated properties
    {
      name: '_Position',
      type: 'string',
      persist: false,
      convert: function (value, model) {
        var positionId = model.get('Position');
        var positions = Ext.StoreManager.lookup("option.Positions");
        var position = positions.findRecord('PositionID', positionId);
        return position ? position.get("LongName") : "";
      }
    }
  ],

  set: function (fieldName, value) {
    this.callParent(arguments);

    var me = this,
      single = (typeof fieldName == 'string');

    if (single && fieldName === 'Position') {
      me.set('_Position');
    } else {
      var values = fieldName;

      for (name in values) {
        if (name === 'Position') {
          me.set('_Position')
        }
      }
    }
  }
});