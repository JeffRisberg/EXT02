/**
 * Store for managing car categories
 */
Ext.define('CarTracker.store.option.Categories', {
  extend: 'Ext.data.Store',
  alias: 'store.option.category',
  requires: [
    'CarTracker.model.option.Category'
  ],
  storeId: 'Categories',
  model: 'CarTracker.model.option.Category',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/categories.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});