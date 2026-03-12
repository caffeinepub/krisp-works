import Set "mo:core/Set";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

actor {
  let administrators = Set.fromIter([Principal.fromText("2vxsx-fae")].values());

  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compare(message1 : Message, message2 : Message) : Order.Order {
      if (message1.timestamp < message2.timestamp) {
        #less;
      } else if (message1.timestamp > message2.timestamp) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let messages = Set.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    let entry : Message = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(entry);
  };

  public query ({ caller }) func getMessages() : async [Message] {
    if (not administrators.contains(caller)) { Runtime.trap("Access denied") };
    messages.toArray().reverse();
  };

  public query ({ caller }) func isAdmin() : async Bool {
    administrators.contains(caller);
  };
};
