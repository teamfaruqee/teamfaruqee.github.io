var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {

        var thumbElements = $(el).find('.gallery-photo:not(.isotope-hidden)').get(), //el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

//        for(var value of thumbElements.values()) { 
//          console.log(value); 
//        }
        //console.dir('thumbElements-'+thumbElements);

        //console.log('numNodes-'+numNodes);

        for(var i = 0; i < numNodes; i++) {


                console.log('i-'+i);

                 figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element



                // create slide object
                if ($(linkEl).data('type') == 'video') {
                    item = {
                      html: $(linkEl).data('video')
                    };
                  } else {
                        size = linkEl.getAttribute('data-size').split('x');
                        item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };

                  }



                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML; 
                }

                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);


        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };


    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        //console.dir('eTarget-'+eTarget);

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            //return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            return (hasClass(el, 'gallery-photo'));
        });

        //console.dir('clickedListItem-'+clickedListItem);
        //console.dir('clickedListItem parent-'+clickedListItem.parentNode);

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        /*var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index; */

        var clickedGallery = clickedListItem.closest('.section-gallery'),
            childNodes = $(clickedListItem.closest('.section-gallery')).find('.gallery-photo:not(.isotope-hidden)').get(),
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

//        for(var value of childNodes.values()) { 
//          console.log(value); 
//        }
        //console.dir('childNodes-'+childNodes);
        //console.log('numChildNodes-'+numChildNodes);
        for (var i = 0; i < numChildNodes; i++) {

                 if(childNodes[i].nodeType !== 1) { 
                continue; 
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;                    
                    break;
                }
                nodeIndex++;


        }

        //console.log('index-'+index );

        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        //console.log('galleryElement-' + galleryElement);
        //items = parseThumbnailElements(galleryElement);
        items = parseThumbnailElements(galleryElement.parentNode);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

        // Enter full screen
//        let psAPI = gallery.ui.getFullscreenAPI();
//        psAPI.enter();

         gallery.listen('beforeChange', function() {
          var currItem = $(gallery.currItem.container);
          $('.pswp__video').removeClass('active');
          var currItemIframe = currItem.find('.pswp__video').addClass('active');
          $('.pswp__video').each(function() {
            if (!$(this).hasClass('active')) {
              $(this).attr('src', $(this).attr('src'));
            }
          });
        });

        gallery.listen('close', function() {
            //psAPI.exit();
          $('.pswp__video').each(function() {
            $(this).attr('src', $(this).attr('src'));
          });
        });

    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );
          /*
          for(var value of galleryElements.values()) { 
              console.log(value); 
            } */
          //console.dir('gallerySelector length-'+galleryElements.length);
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
//initPhotoSwipeFromDOM('.gallery-showcase');
      initPhotoSwipeFromDOM('.section-gallery');