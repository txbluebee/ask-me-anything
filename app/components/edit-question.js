import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        content: this.get('content')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
