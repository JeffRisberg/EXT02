/**
 * Store for managing car features
 */
Ext.define('CarTracker.store.option.Features', {
  extend: 'Ext.data.Store',
  alias: 'store.option.feature',
  requires: [
    'CarTracker.model.option.Feature'
  ],
  storeId: 'Features',
  model: 'CarTracker.model.option.Feature',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/features.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});