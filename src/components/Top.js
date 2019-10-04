import React from 'react'
import { Anchor } from './Anchor'
import { GitHub, Mail, Facebook } from 'react-feather'
export function Top({ color }) {
  return (
    <div className="top">
      <Anchor href="https://facebook.com/CivicTechRomania" title="Facebook Civictech Romania">
        <Facebook color={color} size={16} />
      </Anchor>
      <Anchor href="mailto:office@civictech.ro" title="Email Civictech Romania">
        <Mail color={color} size={16} />
      </Anchor>
      <Anchor href="https://github.com/civictechro" title="Github Civictech Romania">
        <GitHub color={color} size={16} />
      </Anchor>
    </div>
  )
}
