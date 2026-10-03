/* Add the newest article first. Claude can update this file daily and publish. */
var PRIMELUX_POSTS = [
  {
    date: "October 2, 2026",
    slug: "how-to-evaluate-a-wholesale-hair-lot",
    title: "How Professionals Evaluate a Wholesale Ukrainian Hair Lot",
    excerpt: "A disciplined inspection framework for extension artists, wig makers and production teams selecting premium natural hair.",
    body: "Start with the exact lot, not a generic sample. Review its natural tone range, movement and preparation, then confirm that short hairs up to 20 centimeters have been combed out. PrimeLux Hair provides a real video of the specific wholesale lot before dispatch so professional buyers can make a confident sourcing decision."
  },
  {
    date: "October 1, 2026",
    slug: "natural-tone-ranges-for-premium-work",
    title: "Natural Tone Ranges for Premium Extension and Wig Work",
    excerpt: "Why coherent natural colour ranges give elite professionals greater creative control.",
    body: "Premium work requires a palette selected around the client and the final result. A professionally sorted tone range allows extension artists and wig makers to plan blends without treating hair as a retail commodity. PrimeLux Hair forms wholesale lots by natural colour and records the chosen range in the B2B brief."
  },
  {
    date: "September 30, 2026",
    slug: "why-exact-lot-video-matters",
    title: "Why an Exact-Lot Video Matters in B2B Hair Sourcing",
    excerpt: "The video should show the product being ordered—not a representative retail sample.",
    body: "An exact-lot video gives a professional buyer a direct view of movement, colour and the prepared wholesale selection. It supports a precise conversation before dispatch and keeps the sourcing process focused on the actual lot required for extensions, premium wigs, VIP clients or production work."
  }
];
(function () {
  var root = document.getElementById('posts');
  if (!root) return;
  for (var i = 0; i < PRIMELUX_POSTS.length; i++) {
    var post = PRIMELUX_POSTS[i];
    var article = document.createElement('article');
    article.className = 'card post-card';
    article.id = post.slug;
    article.innerHTML = '<div class="eyebrow">' + post.date + '</div><h2>' + post.title + '</h2><p class="post-excerpt">' + post.excerpt + '</p><div class="post-body"><p>' + post.body + '</p></div><a class="btn" href="../en/#order">START A B2B ORDER</a>';
    root.appendChild(article);
  }
}());
