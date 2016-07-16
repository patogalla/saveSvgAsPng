(function() {
  var out$ = typeof exports != 'undefined' && exports || typeof define != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [ '+ HTML_ENTITIES() +' ]>';
  
  function HTML_ENTITIES() {
    return '<!ENTITY quot "&#34;">  <!ENTITY amp "&#38;">  <!ENTITY apos "&#39;">  <!ENTITY lt "&#60;">  <!ENTITY gt "&#62;">  <!ENTITY nbsp "&#160;">  <!ENTITY iexcl "&#161;">  <!ENTITY cent "&#162;">  <!ENTITY pound "&#163;">  <!ENTITY curren "&#164;">  <!ENTITY yen "&#165;">  <!ENTITY brvbar "&#166;">  <!ENTITY sect "&#167;">  <!ENTITY uml "&#168;">  <!ENTITY copy "&#169;">  <!ENTITY ordf "&#170;">  <!ENTITY laquo "&#171;">  <!ENTITY not "&#172;">  <!ENTITY shy "&#173;">  <!ENTITY reg "&#174;">  <!ENTITY macr "&#175;">  <!ENTITY deg "&#176;">  <!ENTITY plusmn "&#177;">  <!ENTITY sup2 "&#178;">  <!ENTITY sup3 "&#179;">  <!ENTITY acute "&#180;">  <!ENTITY micro "&#181;">  <!ENTITY para "&#182;">  <!ENTITY middot "&#183;">  <!ENTITY cedil "&#184;">  <!ENTITY sup1 "&#185;">  <!ENTITY ordm "&#186;">  <!ENTITY raquo "&#187;">  <!ENTITY frac14 "&#188;">  <!ENTITY frac12 "&#189;">  <!ENTITY frac34 "&#190;">  <!ENTITY iquest "&#191;">  <!ENTITY Agrave "&#192;">  <!ENTITY Aacute "&#193;">  <!ENTITY Acirc "&#194;">  <!ENTITY Atilde "&#195;">  <!ENTITY Auml "&#196;">  <!ENTITY Aring "&#197;">  <!ENTITY AElig "&#198;">  <!ENTITY Ccedil "&#199;">  <!ENTITY Egrave "&#200;">  <!ENTITY Eacute "&#201;">  <!ENTITY Ecirc "&#202;">  <!ENTITY Euml "&#203;">  <!ENTITY Igrave "&#204;">  <!ENTITY Iacute "&#205;">  <!ENTITY Icirc "&#206;">  <!ENTITY Iuml "&#207;">  <!ENTITY ETH "&#208;">  <!ENTITY Ntilde "&#209;">  <!ENTITY Ograve "&#210;">  <!ENTITY Oacute "&#211;">  <!ENTITY Ocirc "&#212;">  <!ENTITY Otilde "&#213;">  <!ENTITY Ouml "&#214;">  <!ENTITY times "&#215;">  <!ENTITY Oslash "&#216;">  <!ENTITY Ugrave "&#217;">  <!ENTITY Uacute "&#218;">  <!ENTITY Ucirc "&#219;">  <!ENTITY Uuml "&#220;">  <!ENTITY Yacute "&#221;">  <!ENTITY THORN "&#222;">  <!ENTITY szlig "&#223;">  <!ENTITY agrave "&#224;">  <!ENTITY aacute "&#225;">  <!ENTITY acirc "&#226;">  <!ENTITY atilde "&#227;">  <!ENTITY auml "&#228;">  <!ENTITY aring "&#229;">  <!ENTITY aelig "&#230;">  <!ENTITY ccedil "&#231;">  <!ENTITY egrave "&#232;">  <!ENTITY eacute "&#233;">  <!ENTITY ecirc "&#234;">  <!ENTITY euml "&#235;">  <!ENTITY igrave "&#236;">  <!ENTITY iacute "&#237;">  <!ENTITY icirc "&#238;">  <!ENTITY iuml "&#239;">  <!ENTITY eth "&#240;">  <!ENTITY ntilde "&#241;">  <!ENTITY ograve "&#242;">  <!ENTITY oacute "&#243;">  <!ENTITY ocirc "&#244;">  <!ENTITY otilde "&#245;">  <!ENTITY ouml "&#246;">  <!ENTITY divide "&#247;">  <!ENTITY oslash "&#248;">  <!ENTITY ugrave "&#249;">  <!ENTITY uacute "&#250;">  <!ENTITY ucirc "&#251;">  <!ENTITY uuml "&#252;">  <!ENTITY yacute "&#253;">  <!ENTITY thorn "&#254;">  <!ENTITY yuml "&#255;">  <!ENTITY OElig "&#338;">  <!ENTITY oelig "&#339;">  <!ENTITY Scaron "&#352;">  <!ENTITY scaron "&#353;">  <!ENTITY Yuml "&#376;">  <!ENTITY fnof "&#402;">  <!ENTITY circ "&#710;">  <!ENTITY tilde "&#732;">  <!ENTITY Alpha "&#913;">  <!ENTITY Beta "&#914;">  <!ENTITY Gamma "&#915;">  <!ENTITY Delta "&#916;">  <!ENTITY Epsilon "&#917;">  <!ENTITY Zeta "&#918;">  <!ENTITY Eta "&#919;">  <!ENTITY Theta "&#920;">  <!ENTITY Iota "&#921;">  <!ENTITY Kappa "&#922;">  <!ENTITY Lambda "&#923;">  <!ENTITY Mu "&#924;">  <!ENTITY Nu "&#925;">  <!ENTITY Xi "&#926;">  <!ENTITY Omicron "&#927;">  <!ENTITY Pi "&#928;">  <!ENTITY Rho "&#929;">  <!ENTITY Sigma "&#931;">  <!ENTITY Tau "&#932;">  <!ENTITY Upsilon "&#933;">  <!ENTITY Phi "&#934;">  <!ENTITY Chi "&#935;">  <!ENTITY Psi "&#936;">  <!ENTITY Omega "&#937;">  <!ENTITY alpha "&#945;">  <!ENTITY beta "&#946;">  <!ENTITY gamma "&#947;">  <!ENTITY delta "&#948;">  <!ENTITY epsilon "&#949;">  <!ENTITY zeta "&#950;">  <!ENTITY eta "&#951;">  <!ENTITY theta "&#952;">  <!ENTITY iota "&#953;">  <!ENTITY kappa "&#954;">  <!ENTITY lambda "&#955;">  <!ENTITY mu "&#956;">  <!ENTITY nu "&#957;">  <!ENTITY xi "&#958;">  <!ENTITY omicron "&#959;">  <!ENTITY pi "&#960;">  <!ENTITY rho "&#961;">  <!ENTITY sigmaf "&#962;">  <!ENTITY sigma "&#963;">  <!ENTITY tau "&#964;">  <!ENTITY upsilon "&#965;">  <!ENTITY phi "&#966;">  <!ENTITY chi "&#967;">  <!ENTITY psi "&#968;">  <!ENTITY omega "&#969;">  <!ENTITY thetasym "&#977;">  <!ENTITY upsih "&#978;">  <!ENTITY piv "&#982;">  <!ENTITY ensp "&#8194;">  <!ENTITY emsp "&#8195;">  <!ENTITY thinsp "&#8201;">  <!ENTITY zwnj "&#8204;">  <!ENTITY zwj "&#8205;">  <!ENTITY lrm "&#8206;">  <!ENTITY rlm "&#8207;">  <!ENTITY ndash "&#8211;">  <!ENTITY mdash "&#8212;">  <!ENTITY lsquo "&#8216;">  <!ENTITY rsquo "&#8217;">  <!ENTITY sbquo "&#8218;">  <!ENTITY ldquo "&#8220;">  <!ENTITY rdquo "&#8221;">  <!ENTITY bdquo "&#8222;">  <!ENTITY dagger "&#8224;">  <!ENTITY Dagger "&#8225;">  <!ENTITY bull "&#8226;">  <!ENTITY hellip "&#8230;">  <!ENTITY permil "&#8240;">  <!ENTITY prime "&#8242;">  <!ENTITY Prime "&#8243;">  <!ENTITY lsaquo "&#8249;">  <!ENTITY rsaquo "&#8250;">  <!ENTITY oline "&#8254;">  <!ENTITY frasl "&#8260;">  <!ENTITY euro "&#8364;">  <!ENTITY image "&#8465;">  <!ENTITY weierp "&#8472;">  <!ENTITY real "&#8476;">  <!ENTITY trade "&#8482;">  <!ENTITY alefsym "&#8501;">  <!ENTITY larr "&#8592;">  <!ENTITY uarr "&#8593;">  <!ENTITY rarr "&#8594;">  <!ENTITY darr "&#8595;">  <!ENTITY harr "&#8596;">  <!ENTITY crarr "&#8629;">  <!ENTITY lArr "&#8656;">  <!ENTITY uArr "&#8657;">  <!ENTITY rArr "&#8658;">  <!ENTITY dArr "&#8659;">  <!ENTITY hArr "&#8660;">  <!ENTITY forall "&#8704;">  <!ENTITY part "&#8706;">  <!ENTITY exist "&#8707;">  <!ENTITY empty "&#8709;">  <!ENTITY nabla "&#8711;">  <!ENTITY isin "&#8712;">  <!ENTITY notin "&#8713;">  <!ENTITY ni "&#8715;">  <!ENTITY prod "&#8719;">  <!ENTITY sum "&#8721;">  <!ENTITY minus "&#8722;">  <!ENTITY lowast "&#8727;">  <!ENTITY radic "&#8730;">  <!ENTITY prop "&#8733;">  <!ENTITY infin "&#8734;">  <!ENTITY ang "&#8736;">  <!ENTITY and "&#8743;">  <!ENTITY or "&#8744;">  <!ENTITY cap "&#8745;">  <!ENTITY cup "&#8746;">  <!ENTITY int "&#8747;">  <!ENTITY there4 "&#8756;">  <!ENTITY sim "&#8764;">  <!ENTITY cong "&#8773;">  <!ENTITY asymp "&#8776;">  <!ENTITY ne "&#8800;">  <!ENTITY equiv "&#8801;">  <!ENTITY le "&#8804;">  <!ENTITY ge "&#8805;">  <!ENTITY sub "&#8834;">  <!ENTITY sup "&#8835;">  <!ENTITY nsub "&#8836;">  <!ENTITY sube "&#8838;">  <!ENTITY supe "&#8839;">  <!ENTITY oplus "&#8853;">  <!ENTITY otimes "&#8855;">  <!ENTITY perp "&#8869;">  <!ENTITY sdot "&#8901;">  <!ENTITY lceil "&#8968;">  <!ENTITY rceil "&#8969;">  <!ENTITY lfloor "&#8970;">  <!ENTITY rfloor "&#8971;">  <!ENTITY lang "&#9001;">  <!ENTITY rang "&#9002;">  <!ENTITY loz "&#9674;">  <!ENTITY spades "&#9824;">  <!ENTITY clubs "&#9827;">  <!ENTITY hearts "&#9829;">  <!ENTITY diams "&#9830;">';
  }

  function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  }

  function requireDomNode(el) {
    if (!isElement(el)) {
      throw new Error('an HTMLElement or SVGElement is required; got ' + el);
    }
  }

  function isExternal(url) {
    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
  }

  function inlineImages(el, callback) {
    requireDomNode(el);

    var images = el.querySelectorAll('image'),
        left = images.length,
        checkDone = function() {
          if (left === 0) {
            callback();
          }
        };

    checkDone();
    for (var i = 0; i < images.length; i++) {
      (function(image) {
        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        if (href) {
          if (isExternal(href.value)) {
            console.warn("Cannot render embedded images linking to external hosts: "+href.value);
            return;
          }
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        href = href || image.getAttribute('href');
        if (href) {
          img.src = href;
          img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
            left--;
            checkDone();
          }
          img.onerror = function() {
            console.log("Could not load "+href);
            left--;
            checkDone();
          }
        } else {
          left--;
          checkDone();
        }
      })(images[i]);
    }
  }

  function styles(el, selectorRemap) {
    var css = "";
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: "+sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0; j < rules.length; j++) {
          var rule = rules[j];
          if (typeof(rule.style) != "undefined") {
            var match, selectorText;

            try {
              selectorText = rule.selectorText;
            } catch(err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText);
              }
            } catch(err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              css += selector + " { " + rule.style.cssText + " }\n";
            } else if(rule.cssText.match(/^@font-face/)) {
              css += rule.cssText + '\n';
            }
          }
        }
      }
    }
    return css;
  }

  function getDimension(el, clone, dim) {
    var v = (el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
      (clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
      el.getBoundingClientRect()[dim] ||
      parseInt(clone.style[dim]) ||
      parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
  }

  function reEncode(data) {
    data = encodeURIComponent(data);
    data = data.replace(/%([0-9A-F]{2})/g, function(match, p1) {
      var c = String.fromCharCode('0x'+p1);
      return c === '%' ? '%25' : c;
    });
    return decodeURIComponent(data);
  }

  out$.svgAsDataUri = function(el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.scale = options.scale || 1;
    options.responsive = options.responsive || false;
    var xmlns = "http://www.w3.org/2000/xmlns/";

    inlineImages(el, function() {
      var outer = document.createElement("div");
      var clone = el.cloneNode(true);
      var width, height;
      if(el.tagName == 'svg') {
        width = options.width || getDimension(el, clone, 'width');
        height = options.height || getDimension(el, clone, 'height');
      } else if(el.getBBox) {
        var box = el.getBBox();
        width = box.x + box.width;
        height = box.y + box.height;
        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.appendChild(clone)
        clone = svg;
      } else {
        console.error('Attempted to render non-SVG element', el);
        return;
      }

      clone.setAttribute("version", "1.1");
      if (!clone.getAttribute('xmlns')) {
        clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
      }
      if (!clone.getAttribute('xmlns:xlink')) {
        clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      }

      if (options.responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute("width", width * options.scale);
        clone.setAttribute("height", height * options.scale);
      }

      clone.setAttribute("viewBox", [
        options.left || 0,
        options.top || 0,
        width,
        height
      ].join(" "));

      var fos = clone.querySelectorAll('foreignObject > *');
      for (var i = 0; i < fos.length; i++) {
        if (!fos[i].getAttributeNS('xml', 'xmlns')) {
          fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
        }
      }

      outer.appendChild(clone);

      var css = styles(el, options.selectorRemap);
      var s = document.createElement('style');
      s.setAttribute('type', 'text/css');
      s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
      var defs = document.createElement('defs');
      defs.appendChild(s);
      clone.insertBefore(defs, clone.firstChild);

      var svg = doctype + outer.innerHTML;
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(svg));
      if (cb) {
        cb(uri);
      }
    });
  }

  out$.svgAsPngUri = function(el, options, cb) {
    requireDomNode(el);

    out$.svgAsDataUri(el, options, function(uri) {
      var image = new Image();
      image.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext('2d');
        if(options && options.backgroundColor){
          context.fillStyle = options.backgroundColor;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.drawImage(image, 0, 0);
        var a = document.createElement('a'), png;
        try {
          png = canvas.toDataURL('image/png');
        } catch (e) {
          if ((typeof SecurityError !== 'undefined' && e instanceof SecurityError) || e.name == "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else {
            throw e;
          }
        }
        cb(png);
      }
      image.onerror = function() {
        console.error(
          'There was an error loading the data URI as an image on the following SVG\n',
          window.atob(uri.slice(26)), '\n',
          "Open the following link to see browser's diagnosis\n",
          uri);
      }
      image.src = uri;
    });
  }

  function download(name, uri) {
    var a = document.createElement('a');
    a.download = name;
    a.href = uri;
    document.body.appendChild(a);
    a.addEventListener("click", function(e) {
      a.parentNode.removeChild(a);
    });
    a.click();
  }

  out$.saveSvg = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function(uri) {
      download(name, uri);
    });
  }

  out$.saveSvgAsPng = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function(uri) {
      download(name, uri);
    });
  }

  // if define is defined create as an AMD module
  if (typeof define !== 'undefined') {
    define(function() {
      return out$;
    });
  }
})();
