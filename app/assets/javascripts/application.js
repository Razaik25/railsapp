// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function updateTime() {
  var a = $('.chef_color')
  a.each(function(el) {
    console.log(a[el], $(a[el]).attr('id'));
  })
}

// var timeNow = moment()
// var dataTime = moment(this.props.details[0].commit.author.date)
// var daysElapsed = timeNow.diff(dataTime, 'seconds')

$(document).ready(function() {
  window.setInterval(() => {updateTime()},1000)

  $('.chef_order').animate({'left':'80%'},120000);
})
