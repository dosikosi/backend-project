import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { Role } from '../role.enum';
  import { ROLES_KEY } from 'src/decorators/roles.decorators';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles) {
        return true;
      }
  
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization.split(' ')[1];
      const user = this.jwtService.decode(token);
      if (!user) {
        return false;
      }
      if (!requiredRoles.some((role) => user.role?.includes(role))) {
        throw new ForbiddenException('Доступ отсутсвует');
      }
      return requiredRoles.some((role) => user.role?.includes(role));
    }
  }