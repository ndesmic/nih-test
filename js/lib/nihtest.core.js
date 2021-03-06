NihTest = (function(){

	function testSession(name, sessionFunc){
		const session = TestSession.create({ name });
		sessionFunc(session);
		const reporter = NihTestReporter.create();
		let html = reporter.report(session);
		document.querySelector(".report").innerHTML = html;
	}

	return {
		testSession
	};
})();
