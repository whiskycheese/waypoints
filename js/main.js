$('.fade-y__box:nth-of-type(1)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '100%',
});

$('.fade-y__box:nth-of-type(2)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '70%',
});

$('.fade-y__box:nth-of-type(3)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});

$('.fade-y__box:nth-of-type(4)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '20%',
});

$('.fade-list__box').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInDown');
      this.destroy();
    }
  },
  offset: '70%',
});

$('.fade-x__box:nth-of-type(1)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  offset: '80%',
});

$('.fade-x__box:nth-of-type(2)').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '80%',
});

$('.bounce-in__box').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__bounceInLeft');
      $(this.element).css('opacity', '1');
      this.destroy();
    }
  },
  offset: '70%',
});

$('.fade-delay__box').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '45%',
});

$('.fade-enlarge__circle').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__zoomIn');
      $(this.element).css('opacity', '1');
      this.destroy();
    }
  },
  offset: '20%',
});

$('.bird').waypoint({
  handler: function (direction) {
    if (direction === 'up') {
      $(this.element).addClass('animate__fadeIn');
      this.destroy();
    }
  },
  offset: '20%',
});

$('.fade-list .bird').waypoint({
  handler: function (direction) {
    if (direction === 'up') {
      $(this.element).addClass('animate__fadeIn');
      this.destroy();
    }
  },
  offset: '80%',
});
