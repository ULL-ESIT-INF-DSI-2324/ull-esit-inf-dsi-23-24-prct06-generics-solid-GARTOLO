import { expect } from "chai";
import {
  EmailService,
  ShortMessageService,
  Notifier,
} from "../../src/ejercicio-5/ejercicio-5";

describe("EmailService", () => {
  it("should send a notification by email", () => {
    const emailService = new EmailService();
    expect(emailService.notify("Hello World!")).to.equal(undefined);
  });

  it("should send a notification by SMS", () => {
    const shortMessageService = new ShortMessageService();
    expect(shortMessageService.notify("Hello World!")).to.equal(undefined);
  });

  it("should send a notification by email", () => {
    const notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification("Hello World!")).to.equal(undefined);
  });
});
