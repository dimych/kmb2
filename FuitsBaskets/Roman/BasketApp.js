BasketApp();
function BasketApp() {
  $('div').append('<select><option>Apple</option><option>Pear</option><option>Orange</option></select>');
  $('div').append('<button class = createFruits> Create Fruits</button>');
  $('div').append('<button class = btnSave> Save Fruits</button>');
  $('div').append('<button class = btnLoad> Load Fruits</button>');
  $('.createFruits').on('click', function () {
    //change();
  }


  // $("select").change(function () {
  //   var str='';
  //   $("select option:selected").each(function () {
  //     str += $(this).text() + " ";
  //     console.log(str);
  //   });
  // })

  

  )

}