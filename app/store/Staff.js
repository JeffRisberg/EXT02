/**
 * Store for managing staff
 */
Ext.require('Ext.ux.data.PagingMemoryProxy');

Ext.define('CarTracker.store.Staff', {
  extend: 'Ext.data.Store',
  alias: 'store.staff',
  requires: [
    'CarTracker.model.Staff'
  ],
  storeId: 'Staff',
  model: 'CarTracker.model.Staff',

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