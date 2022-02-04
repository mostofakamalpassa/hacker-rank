//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 class BankAccount {
    constructor() {
      this.balances = 0 ;
      this.isOpen = false;
    }
  
    open() {
      if(!this.isOpen){
        this.isOpen = true;
      }else{
        throw new ValueError("Bank Account al ready Open");
      }
      
    }
  
    close() {
      if(this.isOpen){
        this.isOpen = false;
        this.balances = 0;
      }else{
         throw new ValueError("Bank Account al ready Close");
      }
      
    }
  
    deposit(depoist) {
      if(this.isOpen && depoist >= 0){
          this.balances += depoist;
      }
      else{
         throw new ValueError("Can not nagitive value depoist");
      }
       
    }
  
    withdraw( draw) {

      if(draw < 0){
        throw new ValueError("Error");
      }
     if(this.isOpen && (this.balances - draw ) >= 0 ){
          this.balances -= draw;
      }else{
         throw new ValueError("Error");
      }
    
      
      
     
    }
  
    get balance() {
      if(this.isOpen){
        return this.balances;
      }else{
        throw new ValueError('Bank account is closed');
      }
       
    }
  }
  
 class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }
  

  const account = new BankAccount();
account.open();
account.deposit(100);
account.withdraw(20);
account.withdraw(80);
account.withdraw(-80);
// expect(account.balance).toEqual(0);