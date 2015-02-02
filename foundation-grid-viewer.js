(function(){
    var init = function($, settings){
        var gridHtml;
        gridHtml = '<div class="gridContainer">';
        gridHtml += '<div class="gridRow">';
        gridHtml += '</div>';
        gridHtml += '</div>';
        $(".grid-viewer").prepend(gridHtml);

        var gridHtml;
        gridHtml = '<div class="gridOptions">';
        gridHtml += '<label for="gridMaxSize">Maximum Row Width <input type"text" id="gridMaxSize" name="gridMaxSize" value="1080" /></label>';
        gridHtml += '<label for="gridCount">Number of columns <input type"text" id="gridCount" name="gridCount" value="12" /></label>';
        gridHtml += '<label for="gridGutterSize">Size of gutter <input type"text" id="gridGutterSize" name="gridGutterSize" value="16" /></label>';
        gridHtml += '<label for="gridCollapse">Collapse Grid? <input type="checkbox" id="gridCollapse" name="gridCollapse" value="1" /></label>';
        gridHtml += '<label for="gridOpacity">Grid Opacity <input type"text" id="gridOpacity" name="gridOpacity" value="0.2" /></label>';
        gridHtml += '</div>';
        $(".grid-viewer").prepend(gridHtml);

        applyStyling();

        $('.gridOptions input').on('change keyup click', function(){
            applyStyling();
        });
    };

    applyStyling = function(){
        // Grid Viewer Blocks
        var gridOptions = $('.gridOptions');
        var gridViewer = $('.gridContainer');
        var gridViewerRow = $(gridViewer).find('.gridRow');

        // Grid Options Settings
        $(gridOptions).css({
            'border-bottom': '1px solid #333333',
            'padding': '1rem',
            'position': 'absolute',
            'background-color': '#ffffff',
            'z-index': '1000000',
            'top': 0,
            'left': 0,
            'width': '100%',
        });
        $(gridOptions).find('label').css({
            'display': 'inline',
            'padding-right': '2rem',
        });
        $(gridOptions).find('input').css({
            'max-width': '3rem',
        });

        // Grid Settings
        $(gridViewer).css({
            'position': 'absolute',
            'z-index': '999999',
            'height': '100%',
            'left': 0,
            'top': 0,
            'width': '100%',
        });
        if(($('#gridMaxSize').val().indexOf("%") >= 0)){
            var gridSettingsMaxSize = $('#gridMaxSize').val();
        }else{
            var gridSettingsMaxSize = $('#gridMaxSize').val() + 'px';
        }
        var gridSettingsOpacity = $('#gridOpacity').val();

        // Grid Column Settings
        var gridSettingsCount = $('#gridCount').val();
        var gridSettingsColumnWidth = 100 / gridSettingsCount;
        var gridSettingsGutterSize = $('#gridGutterSize').val();

        if($('#gridCollapse').is(':checked')){
            gridSettingsGutterSize = 0;
        }

        //Create Columns
        $('.gridColumn').remove();
        for(var i = 0; i < gridSettingsCount; i++){
            $(gridViewerRow).append('<div class="gridColumn" style="background-color: #000000;"><div style="background-color: #ff0000; width: 100%; height: 100%;"></div></div>');
        }

        $(gridViewerRow).css({
            'max-width': gridSettingsMaxSize,
            'margin': '0 auto',
            'opacity': gridSettingsOpacity,
			'height': '100%',
        });

        $('.gridColumn').css({
            'width': gridSettingsColumnWidth + '%',
            'float': 'left',
            'padding-left': gridSettingsGutterSize / 2,
            'padding-right': gridSettingsGutterSize / 2,
            'box-sizing': 'border-box',
			'height': '100%',
		});
    };

    // Load jQuery from CDN if needed
    if (!window.jQuery) {
        var head = document.getElementsByTagName("head")[0],
            jQueryScript = document.createElement("script");
        jQueryScript.type = "text/javascript";
        jQueryScript.src = "https://code.jquery.com/jquery-1.10.0.min.js";
        jQueryScript.onload = function() { init(window.jQuery); };
        head.appendChild(jQueryScript);
    } else {
        init(window.jQuery);
    }
})();