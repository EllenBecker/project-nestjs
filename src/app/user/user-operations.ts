import { applyMixins } from 'src/shared/mixin';

class UserOperations {
  start():void {
    this.connectUser();
    this.addPermission(['Permissão 1', 'Permissão 2']);
    this.removePermission('Permissão 1');
    this.disconnectUser();
  }
}

 class UserConnectivity {
  connected: boolean;

  constructor() {
    this.connected = false;
  }

  public connectUser(): void {
    this.connected = true;
    console.log('Usuário conectado!');
  }

  public disconnectUser(): void {
    this.connected = false;
    console.log('Usuário desconectado!');
  }
}


class UserPermission {
  permissions: Array<string>;

  constructor() {
    this.permissions = [];
  }

  public addPermission(permissions: Array<string>): void {
    this.permissions = permissions;
    console.log('Permissões adicionadas:', permissions);
  }

  public removePermission(permission: string): void {
    const index = this.permissions.indexOf(permission);
    if (index !== -1) {
      this.permissions.splice(index, 1);
      console.log(`Permissão removida: '${permission}'`);
    }
  }
}


interface UserOperations extends UserConnectivity, UserPermission {}

applyMixins(UserOperations, [ UserConnectivity, UserPermission]);

const userOperations = new UserOperations();

userOperations.start();
