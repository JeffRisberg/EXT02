/**
 * Store for managing cars
 */
Ext.require('Ext.ux.data.PagingMemoryProxy');

Ext.define('CarTracker.store.Cars', {
  extend: 'Ext.data.Store',
  alias: 'store.car',
  requires: [
    'CarTracker.model.Car'
  ],
  storeId: 'Cars',
  model: 'CarTracker.model.Car',

  proxy: {
    type: "pagingmemory",
    reader: {
      type: "array"
    }
  },

  // This is commented out so that content is maintained rather than reloaded to empty.
  load: function () {
  }
});