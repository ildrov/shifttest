var lastResFind = "";
var copy_page = "";

function TrimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}

function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;
    

    idTimer = setTimeout(function () { document.getElementById('info').innerHTML = ' '; }, 50);
    if (obj) {
        textToFind = TrimStr(obj.value);
    } 
    if (textToFind == "") {
        idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Поле пустое, введите что-нибудь'; }, 100);
        return;
    }


    if (copy_page.length > 0) {
        document.body.innerHTML = copy_page;
        
    }
    else copy_page = document.body.innerHTML;

    
    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:red;'>" + textToFind + "</a>");


    lastResFind = textToFind;
    window.location = '#' + textToFind;

    
    var str = copy_page;
    var words = str.split(eval("/" + textToFind + "/gi"));
    var collect = {};
    for (var i = 0; i < words.length; i++) {

        if (!collect[words[i]])
            collect[words[i]] = 0;

        collect[words[i]]++;
    }
    var i = i - 1;

    if (i > 0) {

        idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Кол-во найденных слов: ' + i; }, 100);
    }

    else {
        idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Ничего не найдено' }, 100);
    }


}

function ClearOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;
    idTimer = setTimeout(function () { document.getElementById('info').innerHTML = ' '; }, 50);
    

    if (copy_page.length > 0)
        document.body.innerHTML = copy_page;
    else copy_page = document.body.innerHTML;

    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style=' '>" + textToFind + "</a>");
  
}