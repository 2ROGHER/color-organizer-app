import { Observable } from 'rxjs';

// observer => collection of callbacks, estos son invocados si la data o la collection de datos
// es actualizado

/**
 * Observable es una collection de datos.
 * Este es un patron de (Event-Driven or Event-Buss) => (Observer)
 * Tu puedes (registrar enventos)
 * Tu puedes desregistrarte de eventos
 * Tu puedes lanzar eventos
 * Tu puedes en cualquier momento de la operacion conbinar operaciones de filter (esta es la verdadera
 * esencia de ver los datos en el (stream)) y sobre ello realizar ciertas acciones para [alterar] el flujo
 * segun las necesidades de la aplicacion.
 * El dato del [stream] puede ser observado por sus (subcribers) y ser notificado una vez el [state] es cambiado
 * [cold observable] => produce valores (solo) cuando despues de que un objeto se haya subscrito por un [observer]
 * [hot observable] =>  produce valores incluso antes de  que el objeto se haya subscrito a este
 * [Strea] => se refiere a la data que es enviado a traves de un [Observable]
 * [Observer] => Es un objeto que se puede subsribirse a un [Observable]. En otras palabras este [Observer]
 * le permite al [store] escuchar por la actualizaciones en su estado luego permite que esta actualización pase
 * a los siguientes suscriptores.
 * [BehaviorSubject] => es una composicion de un [Observable object] y un [Observer object]. Este debe ser pensado
 * como un especial tipo de Event-Bus o (Event-Emitter) que sigue su data y emite el valor actual una vez
 * que se subscriban a este. Este almacena el ultimo valor emitdo, el cual es enviado a cualquier subcriber
 * una vez que se han subscrito a este.
 */

var observable = Observable.create((observer: any) => {
  observer.next(1);
  observer.next(2);
  observer.complete();
}).map((v: any) => v * 2);


