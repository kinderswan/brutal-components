import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'side-nav',
  styleUrl: 'side-nav.scss',
})
export class SideNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
