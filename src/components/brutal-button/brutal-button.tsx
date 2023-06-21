import { Component, Prop, h, Event, EventEmitter, Host, Listen } from '@stencil/core';

@Component({
  tag: 'brutal-button',
  styleUrls: ['./brutal-button.scss'],
})
export class BrutalButton {
  private typeEventMap: Record<HTMLButtonElement['type'], (data?: PointerEvent) => CustomEvent<PointerEvent>> = {
    button: evt => this.clicked.emit(evt),
    reset: evt => this.resetted.emit(evt),
    submit: evt => this.submitted.emit(evt),
  };

  @Prop() name: string;

  @Prop({ reflect: true })
  color: 'primary' | 'accent';

  @Prop({ reflect: true }) size: 'md' | 'lg';

  @Prop({ reflect: true })
  disabled: boolean;

  @Prop() type: HTMLButtonElement['type'] = 'button';

  @Prop() autofocus: HTMLButtonElement['autofocus'];

  @Prop() form: string;
  @Event() clicked: EventEmitter<PointerEvent>;
  @Event() submitted: EventEmitter<PointerEvent>;
  @Event() resetted: EventEmitter<PointerEvent>;

  @Listen('click')
  handleClick(event: PointerEvent) {
    this.typeEventMap[this.type](event);
    (event.target as HTMLElement).blur();
  }

  render() {
    return (
      <Host class="brutal-button">
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
          form={this.form}
          type={this.type}
          name={this.name}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
