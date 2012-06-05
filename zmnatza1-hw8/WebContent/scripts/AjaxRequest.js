var AjaxRequest;
(function(){
	/**
	 * Creates an HTML request depending on what browser is in use
	 */
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			return null;
		}
	}
	
	function decodeParamObject(params) {
		var paramString = '';
		for(paramName in params) {
			var param = params[paramName];
			if(param instanceof Array)
				param.each(function(item){
					paramString += paramName + '=' + escape(item) +'&';
				});
			else
				paramString += paramName + '=' + escape (param);
		}
		return paramString;
	}
	
	AjaxRequest = Class.create({
		initialize: function(url,options) {
			options = options ? options : {};
			method = options.method ? options.method : 'POST';
			var paramString = (typeof options.parameters == 'string') ?
				options.parameters : decodeParamObject(options.parameters);
			var request = getRequestObject();
			request.open(method.toUpperCase(), url + '?' + paramString, true);
			request.onreadystatechange = function() {
				if (request.readyState == 4) {
					if (request.status == 200)
						options.onSuccess(request);
				}
			};
			request.send();
		}
	});
})();
