import React from 'react'
import { Anchor } from './Anchor'
import { GitHub, Mail, Facebook } from 'react-feather'
export function Top({ color }) {
  return (
    <div className="top">
      <Anchor href="https://facebook.com/CivicTechRomania" title="Facebook Civictech România">
        <Facebook color={color} size={16} />
      </Anchor>
      <Anchor href="mailto:office@civictech.ro" title="Email Civictech România">
        <Mail color={color} size={16} />
      </Anchor>
      <Anchor href="https://github.com/civictechro" title="Github Civictech România">
        <GitHub color={color} size={16} />
      </Anchor>
    </div>
  )
}
