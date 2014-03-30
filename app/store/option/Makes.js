/**
 * Store for managing car makes
 */
Ext.define('CarTracker.store.option.Makes', {
  extend: 'Ext.data.Store',
  alias: 'store.option.make',
  requires: [
    'CarTracker.model.option.Make'
  ],
  storeId: 'Makes',
  model: 'CarTracker.model.option.Make',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/makes.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});