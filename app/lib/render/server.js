// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router from 'react-router';
import express from 'express';

import wrapOutput from 'render/wrap';
import routes from '../routes';

// This script is used to serve rendered HTML pages to the user.
//
// We serve the HTML and then activate React on the prerendered page,
// allowing for very quick initialization times. We also fetch all data
// that the page would normally request by XHR and inject it on load.
//
// Since React only covers the content inside the <body> tag, rendered HTML
// is injected into a Jade template to finalize it.
// The templates can be found in 'app/assets/templates/'.

const app = express();

app.use((req, res) => {
  Router.run(routes, req.path, (Handler) => {
    // Generate the route's rendered HTML output and wrap it in the template.
    const output = wrapOutput({
      data: JSON.stringify({'a': 'b'}),
      html: React.renderToString(<Handler />)
    });
    res.send(output);
  });
});
app.listen(9000);
