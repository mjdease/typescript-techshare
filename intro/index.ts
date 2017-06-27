// Clear conosle
console.log('\x1Bc');

// Cmd+shift+o + : to view grouped list of symbols in a file




/**
 * Valid status values are 'online', 'offline', 'connecting', and 'onfire'.
 */
type statusType = 'online' | 'offline' | 'connecting' | 'onfire';

let statusTest: statusType = 'online';













/**
 * Object where the keys are of type statusType and the values are any string
 */
type statusMap = {
  [key in statusType]: string;
}

let statusMessages: statusMap = {
  online: 'test online',
  offline: 'test offline',
  connecting: 'test connecting',
  onfire: 'test onfire'
}












interface IBasicSystem {
  state: statusType;
}

interface IBetterSystem extends IBasicSystem {
  // newProp: string[];
  displayStatus(): void;
}


class System implements IBetterSystem {
  private _name: string;
  private _status: statusType;
  private _lastUpdatedDate: Date;

  private _statusMessageMap: statusMap = {
    online: 'The system is online.',
    offline: 'The system is offline.',
    connecting: 'The system is currently attempting to connect.',
    onfire: 'The system is operating normally...'
  }

  constructor(name: string, status?: statusType) {
    this._name = name;
    // TS complains if there's no existence check here
    if (status) {
      this.state = status;
    }
  }

  // Getters take no arguments and must return a value.
  public get state() {
    return this._status;
  }
  // Setters always accept one argument and return nothing.
  // Accessors should be _fast_
  public set state(newStatus: statusType) {
    this._status = newStatus;
    this._lastUpdatedDate = new Date();
  }

  public displayStatus() {
    let timeString: string = `[${this._lastUpdatedDate.toTimeString()}]`;
    let message: string = this._statusMessageMap[this._status];
    console.log(timeString, `${this._name}:`, message);
  }
}




let mySystem: System = new System('System 1');
mySystem.state = 'online';
mySystem.displayStatus();

// let myNewSystem: ISystem = new System('System 2.0', '');
// myNewSystem.displayStatus();