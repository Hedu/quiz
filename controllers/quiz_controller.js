exports.question = function(req, res) {
	console.log('Question Controller');
	res.render('quizes/question',{pregunta: 'Capital de Italia'} );
};

exports.answer = function(req, res) {
	console.log('Answer Controller');
	if (req.query.respuesta.match(/roma/i)) {
        	res.render('quizes/answer',{respuesta: 'Correcto'} );
	} else {
        	res.render('quizes/answer',{respuesta: 'Incorrecto'} );
	}
};

