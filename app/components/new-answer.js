import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
     var params = {
       author: this.get('author')? this.get('author') : "",
       date: this.get('date')? this.get('date') : "",
       content: this.get('content')? this.get('content') : "",
       question: this.get('question')
     };
     this.sendAction('saveAnswer', params);
   }
  }
});
