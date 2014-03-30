/**
 * Store for managing car models
 */
Ext.define('CarTracker.store.option.Models', {
  extend: 'Ext.data.Store',
  alias: 'store.option.model',
  requires: [
    'CarTracker.model.option.Model'
  ],
  storeId: 'Models',
  model: 'CarTracker.model.option.Model',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/models.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});