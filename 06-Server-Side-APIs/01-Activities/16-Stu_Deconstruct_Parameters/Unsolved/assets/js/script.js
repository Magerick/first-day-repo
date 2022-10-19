fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?
// Look up the Github Rest API and define the terms below.
  per_page=10&
  state=open&
  sort=created&
  direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
