export interface Link {
  name: string
  path: string
  target: '_self' | '_blank'
}

export interface Data {
  links: {
    navbar: Link[]
    footer: Link[]
  }
}
