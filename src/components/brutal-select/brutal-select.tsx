import { Component, Host, Prop, h } from '@stencil/core';

export type BrutalSelectItem = {
  label: string | number;
  value: string | number;
  selected?: boolean;
};

@Component({
  tag: 'brutal-select',
  styleUrl: 'brutal-select.scss',
})
export class BrutalSelect {
  @Prop() options: BrutalSelectItem[];

  @Prop() trackBy: string;

  @Prop() multiple: boolean;

  @Prop() placeholder: string;

  @Prop({
    reflect: true,
  })
  disabled: boolean;

  el: HTMLSelectElement;

  render() {
    return (
      <Host>
        <select multiple={this.multiple} disabled={this.disabled}>
          {this.getOptionsList()}
        </select>
      </Host>
    );
  }

  private getOptionsList() {
    return this.options.map(opt => {
      return (
        <option key={this.trackBy} value={opt.value} selected={opt.selected}>
          {opt.label}
        </option>
      );
    });
  }
}
