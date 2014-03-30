/**
 * Store for managing statuses
 */
Ext.define('CarTracker.store.option.Statuses', {
  extend: 'Ext.data.Store',
  alias: 'store.option.status',
  requires: [
    'CarTracker.model.option.Status'
  ],
  storeId: 'Statuses',
  model: 'CarTracker.model.option.Status',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/statuses.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});