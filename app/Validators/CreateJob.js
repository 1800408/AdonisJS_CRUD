'use strict'

class CreateJob {
  get rules () {
    return {
      // validation rules
      title: 'required',
      link: 'required'
    }
  }

  get messages(){
    return {
      'required': 'Hold up, the {{field}} is required.'
    }
  }
  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateJob
