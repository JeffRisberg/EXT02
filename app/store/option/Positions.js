/**
 * Store for managing positions
 */
Ext.define('CarTracker.store.option.Positions', {
  extend: 'Ext.data.Store',
  alias: 'store.option.position',
  requires: [
    'CarTracker.model.option.Position'
  ],
  storeId: 'Position',
  model: 'CarTracker.model.option.Position',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/positions.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});