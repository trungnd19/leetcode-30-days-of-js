type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (val2) => {
      if (val !== val2) {
        throw new Error('Not Equal');
      }
      return val === val2;
    },
    notToBe: (val2) => {
      if (val === val2) {
        throw new Error('Equal');
      }
      return val !== val2;
    },
  };
}
