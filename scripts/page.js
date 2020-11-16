$("#initiative").sortable({
  cancel: 'input,textarea,button,select,option,[contenteditable]'
});

$("a").on("click", function(){
  var color = $("a");
    color.toggleClass('on');
  var el = $("p");
  (el.attr('contenteditable') ?
    el.removeAttr('contenteditable') :
    el.attr('contenteditable', true));
  el.toggleClass('editing');
})
