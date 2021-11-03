module.exports = {
  async rewrites() {
    return [
      {
        source: '/posts/QWERQWER:path*',
        destination: '/posts/QWERQWER',
      },
    ]
  },
}
