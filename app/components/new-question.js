import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author')? this.get('author') : "",
        date: this.get('date')? this.get('date') : "",
        category: this.get('category')? this.get('category') : "",
        content: this.get('content')? this.get('content') : ""
      };
      this.sendAction('saveQuestion', params);
      // clear the form
      this.set('author', '');
      this.set('date', '');
      this.set('category', '');
      this.set('content', '');
    }
  }
});
