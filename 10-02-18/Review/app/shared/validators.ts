import { ValidatorFn, AbstractControl } from "@angular/forms";

export function bannedWordValidation(bannedWord: string): ValidatorFn{
    return (ctrl: AbstractControl)=>{
        let invalid = ctrl.value.toLowerCase().includes(bannedWord.toLowerCase());
        return invalid ? {'bannedWord': {word: bannedWord}}: null
    }
}