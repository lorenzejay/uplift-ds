const linkResolver = doc => {
  // URL for a category type
  if (doc.type === "category") {
    return `/category/${doc.uid}`
  }

  // URL for a product type
  if (doc.type === "product") {
    return `/product/${doc.uid}`
  }

  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}

export default linkResolver
