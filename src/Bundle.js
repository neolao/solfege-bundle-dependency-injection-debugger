/* @flow */
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"

/**
 * Debugger bundle for the dependency injection
 */
export default class Bundle implements BundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }
}
