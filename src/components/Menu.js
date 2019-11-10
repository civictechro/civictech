import React from 'react'
import { Anchor } from './Anchor'
export function Menu() {
  return (
    <div className="hidden-sm">
      <div className="menu-desktop">
        <Anchor href="/#top" title={'Acasă'}>
          Acasă
        </Anchor>
        <Anchor href="/#who" title={'Cine suntem'}>
          Cine suntem
        </Anchor>
        <Anchor href="/#members" title={'Membri'}>
          Membri
        </Anchor>
        <Anchor href="/#projects" title={'Proiecte'}>
          Proiecte
        </Anchor>
        <Anchor href="/#contact" title={'Contact'}>
          Contact
        </Anchor>
      </div>
    </div>
  )
}
