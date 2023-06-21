import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'brutal-input',
  styleUrl: 'brutal-input.scss',
})
export class BrutalInput {
  private input?: HTMLInputElement;

  @Prop() value: HTMLInputElement['value'];

  @Prop() placeholder: HTMLInputElement['placeholder'];

  @Prop({ reflect: true }) disabled: HTMLInputElement['disabled'];

  @Event() valueChanged: EventEmitter<HTMLInputElement['value']>;

  render() {
    return (
      <Host class="brutal-input">
        <input
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          ref={el => (this.input = el)}
          onInput={() => this.valueChanged.emit(this.input.value)}
        />
      </Host>
    );
  }
}
