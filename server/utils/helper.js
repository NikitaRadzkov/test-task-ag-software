const { RolePermission } = require('../models');
const { Permission } = require('../models');

class Helper {
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  checkPermission(roleId, permName) {
    return new Promise((resolve, reject) => {
      Permission.findOne({
        where: { perm_name: permName },
      })
        .then((perm) => {
          RolePermission.findOne({
            where: {
              role_id: roleId,
              perm_id: perm.id,
            },
          })
            .then((rolePermission) => {
              if (rolePermission) {
                resolve(rolePermission);
              } else {
                reject({ message: 'Forbidden' });
              }
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch(() => {
          reject({ message: 'Forbidden' });
        });
    });
  }
}

module.exports = Helper;
