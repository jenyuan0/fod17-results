import React, { Component } from 'react'
import { createClient } from 'contentful'

import Header from './components/Header'
import Sections from './components/Sections'
import Footer from './components/Footer'

import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          subsections: []
        }
      ],
      isLoading: true
    }
  }

  componentDidMount() {
    const space = process.env.REACT_APP_FOD17_CONTENTFUL_SPACE
    const accessToken = process.env.REACT_APP_FOD17_CONTENTFUL_ACCESS_TOKEN
    const host = process.env.REACT_APP_FOD17_CONTENTFUL_HOST
		const client = createClient({ space, accessToken, host })
		const query = { content_type: 'fod2017', include: 3 }

		client.getEntries(query).then(response => {
			return response.items[0];
		}).then(data => {
      const sections = data.fields.sections.map((section, idx) => {
        const title = section.fields.title || ''
        const sectionName = section.fields.slug || ''

        const copy = section.fields.copy ? marked(section.fields.copy) : ''

        const link = section.fields.link || ''
        const linkTitle = section.fields.linkTitle || ''

        const imageField = section.fields.image || ''
        var image = ''
        if (imageField) {
          image = imageField.fields.file.url
        }

        var subsections = null

        if (section.fields.subsections) {
          subsections = section.fields.subsections.map(subsection => {
            const subsectionTitle = subsection.fields.title || ''
            const subsectionSubTitle = subsection.fields.subtitle || ''
            const subsectionImageField = subsection.fields.image
            var subsectionImage = ''
            if (subsectionImageField) {
              subsectionImage = subsectionImageField.fields.file.url
            }

            const subsectionCopy = subsection.fields.copy ? marked(subsection.fields.copy) : ''

            const subsectionLink = subsection.fields.link || ''
            const subsectionLinkTitle = subsection.fields.linkTitle || ''

            const subsectionGraphicPercentage = subsection.fields.graphicPercentage || ''

            return { subsectionTitle, subsectionSubTitle, subsectionImage, subsectionCopy, subsectionLink, subsectionLinkTitle,subsectionGraphicPercentage }
          })
        }

        const id = section.sys.id || ''

        return { title, sectionName, copy, image, link, linkTitle, subsections, id }
      })

			this.setState({
        sections,
        isLoading: false
			})
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Sections sections={this.state.sections} isLoading={this.state.isLoading} />
        {this.state.sections.length > 0 && <Footer />}
      </div>
    )
  }
}

export default App
