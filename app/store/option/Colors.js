/**
 * Store for managing car colors
 */
Ext.define('CarTracker.store.option.Colors', {
  extend: 'Ext.data.Store',
  alias: 'store.option.color',
  requires: [
    'CarTracker.model.option.Color'
  ],
  storeId: 'Colors',
  model: 'CarTracker.model.option.Color',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/colors.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});