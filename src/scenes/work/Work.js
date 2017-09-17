// @flow
import React, { Component } from 'react'
import { Entry } from './components'
import { Link } from '../../shared/components'
import { stylesheet, mixins, values } from '../../shared/styles'

export class Work extends Component<*> {
  render () {
    const entryProps = {
      style: rules.entry
    }

    return <section {...rules.work}>
      <header>
        <h1>Work</h1>
      </header>
      <Entry {...entryProps} title='Legislated' url='https://legislated.org'>
        <p>A platform for Illinoisans to find, understand, and act quickly on bills in the state legislature. A source of (hopefully) impartial information. Our government can be easier to understand, and it can be easier to interact with.</p>
        <p>Our aim is to cut through the tangled web of sources out there to make legislative information more accessible. Any citizen should be able to understand the how our laws develop, and s/he should feel empowered to act on them through channels s/he knows to be effective.</p>
        <p>I lead development for and co-manage this project, and we meet every Tuesday at <Link to='https://chihacknight.org'>Chi Hack Night</Link>. If you're in Chicago, come hang out!</p>
      </Entry>
      <Entry {...entryProps} title='Scribe' url='https://scribe.io'>
        <p>An frivolous app for people to write creatively, collaboratively, and anonymously. You write one sentence in reponse to the last written sentence. It's kinda like an exquisite corpse for the written word. I collaborate on this with the wonderful <Link to='https://janice.com'>Janice M. Cho</Link> (who is a genius designer).</p>
      </Entry>
      <Entry {...entryProps} title='Consulting'>
        <p>I've been a consultant for a couple years at small devshop building Rails, React, and React Native apps (we are fond of GraphQL/Relay). A little Backbone or whatever-is-necessary sprinkled in there too. I've learned a lot about product development and managing small teams here. It has been a valuable experience.</p>
        <p>Previously, I'd been a lead mobile developer at a large-ish consultancy for a few years building native iOS apps for companies such as Comedy Central and Enterprise Rent-a-Car.</p>
      </Entry>
    </section>
  }
}

const rules = stylesheet({
  work: {
    '> header': {
      ...mixins.header
    }
  },
  entry: {
    '& + &': {
      marginTop: values.spacing
    }
  }
})
