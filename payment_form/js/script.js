$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#success-message').hide();

$("#payment-button").click(function (e) {


  let form = $(this).parents('form');

  let cvv = $('#x_card_code').val();
  let regCVV = /^[0-9]{3,4}$/;
  let CardNo = $('#cc-number').val();
  let regCardNo = /^[0-9]{12,16}$/;
  let date = $('#cc-exp').val().split('/');
  let regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
  let regYear = /^20|21|22|23|24|25|26|27|28|29|30|31$/;
  // let suc = $('#success-message');
  if (form[0].checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();


  }
  else {
    if (!regCardNo.test(CardNo)) {

      $("#cc-number").addClass('required');
      $("#cc-number").focus();
      alert("Введіть корекний номер картки");
      return false;
    }
    else if (!regCVV.test(cvv)) {

      $("#x_card_code").addClass('required');
      $("#x_card_code").focus();
      alert(" Введіть правильний CVV");
      return false;
    }
    else if (!regMonth.test(date[0]) && !regMonth.test(date[1])) {

      $("#cc_exp").addClass('required');
      $("#cc_exp").focus();
      alert("Введіть правильний термин дії картки");
      return false;

    }


    form.submit(function () {
      $.ajax({
        type: 'POST',
        url: 'https://www.paypal.com/cgi-bin/webscr',
        data: 'параметры',
        complete: function () {
          $('#pay-invoice').hide();
        }
      });
    })

  }
  form.addClass('was-validated');

})



