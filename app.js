$(document).ready(() => {
  $(document).scroll(() => {
    if ($(document).scrollTop() > 1) {
      $('div.header').addClass("sticky");
    }
  });
});
