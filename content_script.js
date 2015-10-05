window.hack4dk = (function (window, $, undefined) {
    var Hack4dk = function () {};

    Hack4dk.prototype = {
        testIfProjectsHasLoaded: function () {
            if (!$('#dashboard-projects').length) {
                setTimeout(hack4dk.testIfProjectsHasLoaded, 300);
            } else {
                hack4dk.onProjectsLoad();
            }
        },
        onProjectsLoad: function () {
            var sorterMarkup = $('<div id="h4dFilter" style="background-color:orange;position:fixed;top:50px;right:0px;width:200px;height:230px;overflow:hidden;opacity:0.8;padding:10px"><div id="killFilter" style="position:absolute;bottom:5px;right:5px;width:20px;height:20px;border-radius:10px;padding-left:5px;cursor:pointer;">X</div>Filter projects<br><input id="h4dAll" type="radio" name="projSort" value="all" checked> All<br><input id="h4dDemo" type="radio" name="projSort" value="demo"> with demo<hr style="margin:7px;"><input id="h4dBrain" type="radio" name="projSort" value="brain"> Brainstorm<br><input id="h4dResearch" type="radio" name="projSort" value="research"> Research<br><input id="h4dProto" type="radio" name="projSort" value="proto"> Prototype<br><input id="h4dWire" type="radio" name="projSort" value="wire"> Wireframe<br><input id="h4dBuild" type="radio" name="projSort" value="build"> Building<br><input id="h4dRelease" type="radio" name="projSort" value="release"> Release</div>');
            sorterMarkup.find('#h4dAll').change(function (e) {
                if (e.target.checked) {
                    hack4dk.resetAllProjects();
                }
            });
            sorterMarkup.find('#h4dDemo').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".demo-link").parent().closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dBrain').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".brainstorming").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dResearch').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".researching").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dProto').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".prototyping").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dWire').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".wireframing").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dBuild').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".building").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#h4dRelease').change(function (e) {
                if (e.target.checked) {
                    hack4dk.hideAllProjects();
                    $(".releasing").closest('a').css('opacity','1');
                }
            });
            sorterMarkup.find('#killFilter').click(function(){
                $('#h4dFilter').slideUp(200);
            });
            $('body').append(sorterMarkup);
        },
        hideAllProjects: function () {
             $('#dashboard-projects .entities > a').css('opacity', '0.3');
        },
        resetAllProjects: function () {
             $('#dashboard-projects .entities > a').css('opacity', '1');
        }
    };

    //debugger;
    $('window').on('hashchange', function (e) {
        //debugger;
    });

    return new Hack4dk();
})(window, jQuery);

$(document).ready(function () {
    hack4dk.testIfProjectsHasLoaded();
});
